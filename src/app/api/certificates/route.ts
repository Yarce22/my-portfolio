import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query: `
          {
            certificatesCollection {
              items {
                title
                img {
                  url
                }
              }
            }
          }
        `
      })
    });

    if (response.status === 401) {
      throw new Error('Unauthorized: Please check your Contentful access token');
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(`API Error: ${response.status} - ${errorData?.message || 'Unknown error'}`);
    }

    const { data } = await response.json();

    return NextResponse.json(data);
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