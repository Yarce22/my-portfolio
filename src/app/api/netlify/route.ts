import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://api.netlify.com/api/v1/sites', {
      headers: {
        'User-Agent': `MyApp (${process.env.NEXT_PUBLIC_USER_AGENT})`,
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      }
    });

    if (response.status === 401) {
      throw new Error('Unauthorized: Please check your Netlify access token');
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(`API Error: ${response.status} - ${errorData?.message || 'Unknown error'}`);
    }

    const data = await response.json();

    const transformedData = data.map((site: NetlifySite) => ({
      id: site.id,
      name: site.name,
      url: site.url,
      screen: site.screenshot_url
    }));

    return NextResponse.json(transformedData);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}