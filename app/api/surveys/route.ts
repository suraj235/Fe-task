import { NextResponse } from 'next/server';
import { encrypt } from '@/lib/encryption';
import { Survey } from '@/types/survey';

// **Mock sensitive survey data** This can be replaced with real data fetching logic
const mockSurveys: Survey[] = [
  {
    id: '1',
    title: 'Patient Satisfaction Survey 2024',
    timestamp: new Date('2024-01-15').toISOString(),
    sensitiveData: 'Patient ID: 12345, SSN: XXX-XX-6789, Satisfaction Score: 9/10',
    status: 'completed',
    category: 'Healthcare',
  },
  {
    id: '2',
    title: 'Annual Health Assessment',
    timestamp: new Date('2024-02-20').toISOString(),
    sensitiveData: 'Patient ID: 67890, DOB: 1985-03-15, Blood Type: O+',
    status: 'active',
    category: 'Healthcare',
  },
  {
    id: '3',
    title: 'Mental Health Screening',
    timestamp: new Date('2024-03-10').toISOString(),
    sensitiveData: 'Patient ID: 54321, Diagnosis: Anxiety Disorder, Treatment Plan: CBT',
    status: 'pending',
    category: 'Mental Health',
  },
  {
    id: '4',
    title: 'Medication Adherence Study',
    timestamp: new Date('2024-04-05').toISOString(),
    sensitiveData: 'Patient ID: 98765, Medications: Lisinopril 10mg, Metformin 500mg',
    status: 'active',
    category: 'Pharmacy',
  },
  {
    id: '5',
    title: 'Post-Surgery Follow-up',
    timestamp: new Date('2024-05-12').toISOString(),
    sensitiveData: 'Patient ID: 11223, Surgery Date: 2024-04-01, Recovery Status: Good',
    status: 'completed',
    category: 'Surgery',
  },
  {
    id: '6',
    title: 'Diabetes Management Survey',
    timestamp: new Date('2024-06-18').toISOString(),
    sensitiveData: 'Patient ID: 33445, HbA1c: 6.8%, Insulin Type: Humalog',
    status: 'active',
    category: 'Endocrinology',
  },
];

export async function GET() {
  try {
    // Encrypt the entire payload
    const payload = JSON.stringify(mockSurveys);
    const encryptedPayload = encrypt(payload);
    
    return NextResponse.json({
      success: true,
      data: encryptedPayload,
    });
  } catch (error) {
    console.error('Encryption error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to encrypt data' },
      { status: 500 }
    );
  }
}