import { decrypt } from '@/lib/encryption';
import { Survey } from '@/types/survey';
import SurveyList from '@/components/SurveyList';

async function getSurveys(): Promise<Survey[]> {
  try {
    // Fetch encrypted data from our API route
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/surveys`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch surveys');
    }

    const result = await response.json();

    if (!result.success) {
      throw new Error('API returned error');
    }

    // Decrypt the payload on the server
    const decryptedPayload = decrypt(result.data);
    const surveys: Survey[] = JSON.parse(decryptedPayload);

    return surveys;
  } catch (error) {
    console.error('Error fetching surveys:', error);
    return [];
  }
}

export default async function Home() {
  // Server-side data fetching with decryption
  const surveys = await getSurveys();

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 via-blue-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Secure Survey Dashboard
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            End-to-end encrypted patient surveys with server-side decryption for maximum security
          </p>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-blue-100">
              All data encrypted with AES-256-GCM
            </span>
          </div>
        </div>
      </section>

      {/* Survey List */}
      <SurveyList initialSurveys={surveys} />

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p className="text-sm mb-2">
              Built with Next.js 16, TypeScript, and Framer Motion
            </p>
            <p className="text-xs text-gray-500">
              A Frontend Assessment for Jasper Colin @{new Date().getFullYear()} Copyright :)
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}