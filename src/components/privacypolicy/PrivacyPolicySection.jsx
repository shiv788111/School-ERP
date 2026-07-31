'use client'

import { useEffect, useState, useCallback } from 'react'

// ─── API CONFIGURATION ──────────────────────────────────────────────────────
const API_URL = 'https://university.fctesting.shop/api/cms/getAllCmsPages';
const CACHE_KEY = 'privacyPolicyContent';
const CACHE_DURATION = 3600000; // 1 hour in milliseconds

// ─── LOADING FALLBACK ──────────────────────────────────────────────────────
function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E4E6D] mx-auto mb-4" />
        <p className="text-gray-500 text-sm" aria-label="Loading privacy policy">
          Loading Privacy Policy...
        </p>
      </div>
    </div>
  )
}

// ─── ERROR FALLBACK ──────────────────────────────────────────────────────
function ErrorDisplay({ error, onRetry }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md px-4">
        <div className="text-5xl mb-4">📄</div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Failed to Load Privacy Policy
        </h2>
        <p className="text-gray-500 text-sm mb-4">{error}</p>
        <button
          onClick={onRetry}
          className="px-6 py-2 bg-[#1E4E6D] text-white rounded-lg hover:bg-[#163A52] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E4E6D] focus:ring-offset-2"
          aria-label="Retry loading privacy policy"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}

// ─── JSON-LD SCHEMA ──────────────────────────────────────────────────────
function PrivacyPolicySchema() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Privacy Policy | ConnectSkool",
          "description": "ConnectSkool's privacy policy detailing how we collect, use, and protect your personal information.",
          "url": "https://www.connectskool.com/privacypolicy",
          "isPartOf": {
            "@type": "WebSite",
            "name": "ConnectSkool",
            "url": "https://www.connectskool.com"
          },
          "about": {
            "@type": "Thing",
            "name": "Privacy Policy"
          },
          "datePublished": "2024-01-01",
          "dateModified": currentDate,
          "inLanguage": "en-IN"
        })
      }}
    />
  )
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────
function PrivacyPolicySection() {
  const [htmlContent, setHtmlContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // ─── FETCH WITH CACHING ──────────────────────────────────────────────
  const fetchPrivacyPolicy = useCallback(async (forceRefresh = false) => {
    try {
      setLoading(true)
      setError(null)

      // Check cache first
      if (!forceRefresh) {
        const cachedData = localStorage.getItem(CACHE_KEY)
        if (cachedData) {
          try {
            const { content, timestamp } = JSON.parse(cachedData)
            const now = Date.now()
            if (now - timestamp < CACHE_DURATION) {
              setHtmlContent(content)
              setLoading(false)
              return
            }
          } catch (e) {
            // Cache corrupted, continue to fetch
          }
        }
      }

      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to load privacy policy (${response.status})`)
      }

      const data = await response.json()

      if (data.success && data.data?.pages) {
        const privacyPage = data.data.pages.find(
          (page) => page.page_type === 'privacy_policy'
        )

        if (privacyPage) {
          const content = privacyPage.content || ''
          setHtmlContent(content)
          
          // Cache the content
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify({
              content,
              timestamp: Date.now()
            }))
          } catch (e) {
            // Storage full or unavailable
          }
        } else {
          throw new Error('Privacy Policy page not found')
        }
      } else {
        throw new Error('Invalid API response')
      }
    } catch (err) {
      console.error('Error fetching privacy policy:', err)
      
      // Try to use cached content even if expired
      const cachedData = localStorage.getItem(CACHE_KEY)
      if (cachedData) {
        try {
          const { content } = JSON.parse(cachedData)
          setHtmlContent(content)
          setError('Using cached version. Could not fetch latest.')
          return
        } catch (e) {
          // No valid cache
        }
      }
      
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  // ─── INITIAL FETCH ──────────────────────────────────────────────────
  useEffect(() => {
    fetchPrivacyPolicy()
  }, [fetchPrivacyPolicy])

  // ─── RENDER STATES ──────────────────────────────────────────────────
  if (loading) {
    return <LoadingSpinner />
  }

  if (error && !htmlContent) {
    return (
      <ErrorDisplay 
        error={error} 
        onRetry={() => fetchPrivacyPolicy(true)} 
      />
    )
  }

  return (
    <>
      {/* ─── JSON-LD STRUCTURED DATA ────────────────────────────────────── */}
      <PrivacyPolicySchema />

      <main 
        className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12"
        aria-labelledby="privacy-policy-heading"
      >
        <article className="prose prose-slate max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            className="[&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-[#1E4E6D] [&_h1]:mb-4
                       [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-[#1E4E6D] [&_h2]:mt-8 [&_h2]:mb-3
                       [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-[#1E4E6D] [&_h3]:mt-6 [&_h3]:mb-2
                       [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-4
                       [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:text-gray-700
                       [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:text-gray-700
                       [&_li]:mb-2
                       [&_a]:text-[#F0970A] [&_a]:hover:underline
                       [&_strong]:text-[#1E4E6D]
                       [&_table]:w-full [&_table]:border-collapse [&_table]:mb-4
                       [&_th]:border [&_th]:border-gray-300 [&_th]:p-2 [&_th]:bg-gray-100 [&_th]:text-left
                       [&_td]:border [&_td]:border-gray-300 [&_td]:p-2
                       [&_blockquote]:border-l-4 [&_blockquote]:border-[#F0970A] [&_blockquote]:pl-4 [&_blockquote]:text-gray-600 [&_blockquote]:italic
                       [&_code]:bg-gray-100 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
          />
        </article>
        
        {/* Last Updated */}
        <div className="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-400">
          <p>Last updated: {new Date().toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</p>
          {error && (
            <p className="text-amber-600 mt-2 text-xs">
              ⚠️ {error}
            </p>
          )}
        </div>
      </main>
    </>
  )
}

export default PrivacyPolicySection