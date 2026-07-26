'use client'

import { useEffect, useState } from 'react'

function PrivacyPolicySection() {
  const [htmlContent, setHtmlContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(
          'https://university.fctesting.shop/api/cms/getAllCmsPages',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        if (data.success && data.data?.pages) {
          const privacyPage = data.data.pages.find(
            (page) => page.page_type === 'privacy_policy'
          )

          if (privacyPage) {
            setHtmlContent(privacyPage.content)
          } else {
            throw new Error('Privacy Policy page not found')
          }
        } else {
          throw new Error('Invalid API response')
        }
      } catch (err) {
        console.error('Error fetching privacy policy:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPrivacyPolicy()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-500 text-sm">Loading Privacy Policy...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center  justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-500 text-lg font-semibold">Failed to load Privacy Policy</p>
          <p className="text-gray-400 text-sm mt-2">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div
      className="w-full"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  )
}

export default PrivacyPolicySection