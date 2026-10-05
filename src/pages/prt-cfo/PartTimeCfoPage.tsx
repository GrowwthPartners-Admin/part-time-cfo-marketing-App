import { Head } from 'vite-react-ssg'
import {
  BenefitsSection,
  ComplianceSection,
  ConsultationSection,
  FinalCtaSection,
  Footer,
  Header,
  HeroSection,
  PricingSection,
  QuestionsSection,
  TrustMetricsSection,
  WhatsAppWidget,
  WhyUsSection,
} from '../../components/prt-cfo'
import './part-time-cfo.css'
import MeetJatinSection from '../../components/prt-cfo/MeetJatinSection'
import SocialProofSection from '../../components/prt-cfo/SocialProofSection'
import heroBannerImage from '../../assets/hero/banner-image.webp'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://growwthpartners.com/#organization',
      name: 'Growwth Partners',
      url: 'https://growwthpartners.com/',
      logo: 'https://growwthpartners.com/image/company%20Logo.png',
      description:
        'Singapore-headquartered finance leadership firm serving businesses across Singapore, UAE, Australia, and the US.',
      founder: {
        '@id': 'https://growwthpartners.com/#jatin-detwani',
      },
      sameAs: ['https://growwthpartners.com/'],
    },
    {
      '@type': 'Person',
      '@id': 'https://growwthpartners.com/#jatin-detwani',
      name: 'Jatin Detwani',
      jobTitle: 'Founder',
      worksFor: {
        '@id': 'https://growwthpartners.com/#organization',
      },
      image: 'https://growwthpartners.com/image/jatin-ceo.jpeg',
      email: 'mailto:jd@growwthpartners.com',
      description:
        "Founder of Growwth Partners, recognised as one of Asia's Greatest CFOs and mentor to 250+ founders across Singapore, the UAE, Australia, and the US.",
      sameAs: ['https://www.linkedin.com/in/jatin-detwani/', 'https://growwthpartners.com/'],
    },
    {
      '@type': 'Service',
      '@id': 'https://growwthpartners.com/part-time-cfo#service',
      name: 'Part-Time CFO Services',
      alternateName: ['Fractional CFO Services', 'Virtual CFO Services'],
      serviceType: 'Fractional CFO services',
      url: 'https://growwthpartners.com/part-time-cfo',
      provider: {
        '@id': 'https://growwthpartners.com/#organization',
      },
      description:
        'Part-time CFO and fractional finance leadership for financial analysis, strategic planning, budgeting, risk management, forecasting, compliance, and growth-stage decision support.',
      areaServed: [
        { '@type': 'Country', name: 'Singapore' },
        { '@type': 'Country', name: 'Australia' },
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'United States' },
      ],
      audience: [
        { '@type': 'BusinessAudience', name: 'Startups' },
        { '@type': 'BusinessAudience', name: 'Small businesses' },
        { '@type': 'BusinessAudience', name: 'Medium businesses' },
        { '@type': 'BusinessAudience', name: 'Enterprise-level businesses' },
      ],
      offers: {
        '@type': 'Offer',
        price: '600',
        priceCurrency: 'SGD',
        availability: 'https://schema.org/InStock',
        url: 'https://calendly.com/jd-growwthpartners/demo',
        description: 'Fractional CFO packages starting from SGD 600.',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://growwthpartners.com/part-time-cfo#webpage',
      url: 'https://growwthpartners.com/part-time-cfo',
      name: 'Part-Time CFO Services | Growwth Partners',
      description:
        'Fractional CFO services for startups, small businesses, medium businesses, and enterprise teams across Singapore and Australia.',
      publisher: {
        '@id': 'https://growwthpartners.com/#organization',
      },
      about: {
        '@id': 'https://growwthpartners.com/part-time-cfo#service',
      },
      mainEntity: {
        '@id': 'https://growwthpartners.com/part-time-cfo#service',
      },
    },
  ],
}

const structuredDataJson = JSON.stringify(structuredData).replace(/</g, '\\u003c')

function PartTimeCfoPage() {
  return (
    <>
      <Head>
        <title>Part-Time CFO Services | Growwth Partners</title>
        <meta
          name="description"
          content="Fractional CFO services for startups, small businesses, medium businesses, and enterprise teams across Singapore and Australia."
        />
        <link rel="preload" as="image" href={heroBannerImage} type="image/webp" />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredDataJson }}
      />

      <div className="pcfo-page">
        <Header />
        <main>
          <HeroSection />
          <TrustMetricsSection />
          <BenefitsSection />
          <QuestionsSection />
          <ConsultationSection />
          <WhyUsSection />
          <MeetJatinSection/>
          <PricingSection />
          <SocialProofSection/>
          <ComplianceSection />
          <FinalCtaSection />
        </main>
        <WhatsAppWidget />
        <Footer />
      </div>
    </>
  )
}

export default PartTimeCfoPage
