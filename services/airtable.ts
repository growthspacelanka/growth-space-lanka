// services/airtable.ts
interface ContactFormData {
    name: string;
    email: string;
    countryCode: string;
    phoneNumber: string;
    inquiryType: string;
    message: string;
}


export const submitToAirtable = async (formData: ContactFormData) => {
    try {
        const response = await fetch(`https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/${process.env.NEXT_PUBLIC_AIRTABLE_TABLE_ID}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                records: [
                    {
                        fields: {
                            Name: formData.name,
                            Email: formData.email,
                            'Country Code': formData.countryCode,
                            'Phone Number': formData.phoneNumber,
                            'Inquiry Type': formData.inquiryType,
                            Message: formData.message,
                            Date: new Date().toISOString()
                        }
                    }
                ]
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'SUBMISSION_FAILED');
        }

        return await response.json();
    } catch (error) {
        console.error('Error submitting to Airtable:', error);
        throw error;
    }
};


import { z } from 'zod';

// Quote Form Schema
export const QuoteFormSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email format'),
    countryCode: z.string().min(1, 'Country code is required'),
    phoneNumber: z.string().min(1, 'Phone number is required'),
    companyName: z.string().min(1, 'Company name is required'),
    services: z.array(z.string()).min(1, 'Select at least one service'),
    budget: z.string().min(1, 'Budget range is required'),
    projectDetails: z.string().min(1, 'Project details are required')
});

export type QuoteFormData = z.infer<typeof QuoteFormSchema>;

// services/airtable.ts

// services/airtable.ts

// services/airtable.ts

export const submitQuoteForm = async (formData: QuoteFormData) => {
    try {
        console.log('Submitting to Airtable:', formData);

        const response = await fetch(`https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/Quote%20Requests`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                records: [
                    {
                        fields: {
                            Name: formData.name,
                            Email: formData.email,
                            'Country Code': formData.countryCode,
                            'Phone Number': formData.phoneNumber,
                            CompanyName: formData.companyName,
                            Services: formData.services.toString(), // Convert array to string
                            Budget: formData.budget,
                            ProjectDetails: formData.projectDetails,
                            Date: new Date().toISOString()
                        }
                    }
                ]
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Airtable error:', errorData);
            throw new Error(errorData.error?.message || 'Failed to submit form');
        }

        return await response.json();
    } catch (error) {
        console.error('Error submitting to Airtable:', error);
        throw error;
    }
};