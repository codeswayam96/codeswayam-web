import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Get parameters from URL
    const title = searchParams.get('title') || 'CodeSwayam';
    const description = searchParams.get('description') || 'Building the future of software';
    const type = searchParams.get('type') || 'default'; // default, blog, product, page

    // Different styles based on type
    const backgrounds = {
      default: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #06B6D4 100%)',
      blog: 'linear-gradient(135deg, #0F172A 0%, #4C1D95 50%, #8B5CF6 100%)',
      product: 'linear-gradient(135deg, #0F172A 0%, #065F46 50%, #10B981 100%)',
      page: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #3B82F6 100%)',
    };

    const background = backgrounds[type as keyof typeof backgrounds] || backgrounds.default;

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            background,
            padding: '60px',
            position: 'relative',
          }}
        >
          {/* Decorative elements */}
          <div
            style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'rgba(6, 182, 212, 0.3)',
              filter: 'blur(80px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-50px',
              left: '-50px',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'rgba(139, 92, 246, 0.3)',
              filter: 'blur(60px)',
            }}
          />

          {/* Logo */}
          <div
            style={{
              position: 'absolute',
              top: '60px',
              left: '60px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: 'white',
                letterSpacing: '-0.5px',
              }}
            >
              CodeSwayam
            </span>
          </div>

          {/* Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              maxWidth: '900px',
              zIndex: 10,
            }}
          >
            <h1
              style={{
                fontSize: title.length > 40 ? '48px' : '64px',
                fontWeight: 800,
                color: 'white',
                lineHeight: 1.1,
                letterSpacing: '-2px',
                margin: 0,
              }}
            >
              {title}
            </h1>

            {description && (
              <p
                style={{
                  fontSize: '24px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.4,
                  margin: 0,
                  maxWidth: '700px',
                }}
              >
                {description.length > 120
                  ? description.substring(0, 120) + '...'
                  : description}
              </p>
            )}
          </div>

          {/* Footer */}
          <div
            style={{
              position: 'absolute',
              bottom: '60px',
              right: '60px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '18px',
            }}
          >
            <span>codeswayam.com</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error('OG Image generation error:', e);
    return new Response('Failed to generate image', { status: 500 });
  }
}
