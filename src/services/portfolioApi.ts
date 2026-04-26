import emailjs from '@emailjs/browser'
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

export type Project = {
  id: string
  title: string
  summary: string
  impact: string
  image: string
  stack: string[]
  metrics: string[]
  featured: boolean
  link?: string
}

export type Skill = {
  id: string
  name: string
  category: 'Frontend' | 'Backend' | 'Tools'
  level: number
}

export type ExperienceSignal = {
  id: string
  label: string
  value: string
}

export type ContactRequest = {
  name: string
  email: string
  message: string
}

type PortfolioError = {
  reason: string
}

const wait = (duration = 260) =>
  new Promise((resolve) => {
    window.setTimeout(resolve, duration)
  })

const projects: Project[] = [

  {
    id: 'radius',
    title: 'Radius',
    summary: 'Core admin modules for a 10+ module event management platform including real-time dashboards and reports.',
    impact: 'Ensured a responsive, performant UI across devices for seamless admin operations.',
    image: '/project-radius.svg',
    stack: ['React', 'Material UI', 'Real-time Analytics'],
    metrics: ['Dashboards', 'Event Analytics', 'Attendance'],
    featured: true,
  },
   {
    id: 'aditya-birla',
    title: 'Aditya Birla Channel Partner',
    summary: 'Core admin features for channel partner onboarding, user management, and lead tracking.',
    impact: 'Provided dashboards to monitor partner performance, property leads, and conversion metrics.',
    image: '/project-aditya-birla.svg',
    stack: ['React', 'REST APIs', 'RBAC'],
    metrics: ['Lead Tracking', 'Onboarding', 'Metrics'],
    featured: false,
  },
  {
    id: 'getkredit',
    title: 'GetKredit',
    summary: 'Role-based dashboards for 10+ user types with credit evaluation and property data integration.',
    impact: 'Built reusable UI components for a scalable frontend architecture with secure authentication.',
    image: '/project-getkredit.svg',
    stack: ['React', 'Material UI', 'RBAC', 'REST APIs'],
    metrics: ['10+ User Types', 'Credit API', 'User Management'],
    featured: true,
  },
     {
      id: 'ip-mudra',
      title: 'IP Mudra',
      summary: 'Full-service website for an Intellectual Property law firm in India, covering trademarks, patents, copyrights, and IP litigation services.',
      impact: 'Delivered a professional, SEO-optimized web presence that strengthened client trust and online visibility for the firm.',
      image: '/project-ipmudra.png',
      stack: ['React', 'Vite', 'TypeScript', 'Material UI', 'Responsive Design'],
      metrics: ['SEO Optimized', 'Legal Services', 'Responsive UI'],
      featured: true,
      link: 'https://ipmudra.com',
    },
  {
    id: 'invulb',
    title: 'Invulb',
    summary: 'Interactive portfolio dashboards delivering real-time investment and retirement insights.',
    impact: 'Optimized UI performance to handle large financial datasets and accurate portfolio analysis.',
    image: '/project-invulb.svg',
    stack: ['React.js', 'Data Visualization', 'REST APIs','Material UI'],
    metrics: ['Real-time Data', 'Large Datasets', 'Performance'],
    featured: true,
  },
  {
    id: 'magicbus',
    title: 'MagicBus',
    summary: 'Centralized analytics dashboard to track organizational and program performance.',
    impact: 'Improved reporting accuracy, data visibility, and faster decision-making for stakeholders.',
    image: '/project-magicbus.svg',
    stack: ['React', 'Data Visualization', 'REST APIs', 'Material UI','Typescript'],
    metrics: ['KPI Tracking', 'Analytics', 'Reporting'],
    featured: false,
  },
   {
    id: 'nuquant',
    title: 'NuQuant',
    summary: 'Investment portfolio module with secure authentication, and RBAC for Client, Admin, and Super Admin users.',
    impact: 'Improved application reliability and performance through optimized API calls and production issue resolution.',
    image: '/project-nuquant.svg',
    stack: ['React', 'Material UI', 'Node.js', 'REST APIs'],
    metrics: ['Secure Auth', 'RBAC', 'Portfolio Management'],
    featured: true,
  },

 
]

const skills: Skill[] = [
  { id: 'react', name: 'React.js 19.2', category: 'Frontend', level: 95 },
  { id: 'react-native', name: 'React Native', category: 'Frontend', level: 90 },
  { id: 'typescript', name: 'TypeScript', category: 'Frontend', level: 85 },
  { id: 'redux', name: 'Redux Toolkit / RTK Query', category: 'Frontend', level: 92 },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Frontend', level: 90 },
  { id: 'mui', name: 'Material UI / shadcn', category: 'Frontend', level: 88 },
  { id: 'node', name: 'Node.js', category: 'Backend', level: 80 },
  { id: 'express', name: 'Express.js', category: 'Backend', level: 78 },
  { id: 'mongo', name: 'MongoDB', category: 'Backend', level: 75 },
  { id: 'git', name: 'Git / GitHub / GitLab', category: 'Tools', level: 88 },
  { id: 'postman', name: 'Postman / Swagger', category: 'Tools', level: 85 },
  { id: 'architecture', name: 'Component Architecture', category: 'Frontend', level: 92 },
]

const signals: ExperienceSignal[] = [
  { id: 'experience', label: 'Professional Experience', value: '3.5+ Years' },
  { id: 'performance', label: 'Performance Gain', value: '20% Faster' },
  { id: 'efficiency', label: 'Engineering Output', value: '25% Boost' },
]

/* HOW: fakeBaseQuery exercises RTK Query caching and invalidation without a
   server. Later, fetchBaseQuery can replace it without changing page code. */
export const portfolioApi = createApi({
  reducerPath: 'portfolioApi',
  baseQuery: fakeBaseQuery<PortfolioError>(),
  tagTypes: ['Projects', 'Skills', 'Contact'],
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], void>({
      queryFn: async () => {
        await wait()
        return { data: projects }
      },
      providesTags: ['Projects'],
    }),
    getFeaturedProjects: builder.query<Project[], void>({
      queryFn: async () => {
        await wait(180)
        return { data: projects.filter((project) => project.featured) }
      },
      providesTags: ['Projects'],
    }),
    getSkills: builder.query<Skill[], void>({
      queryFn: async () => {
        await wait()
        return { data: skills }
      },
      providesTags: ['Skills'],
    }),
    getSignals: builder.query<ExperienceSignal[], void>({
      queryFn: async () => {
        await wait(120)
        return { data: signals }
      },
    }),
    sendContact: builder.mutation<{ ok: true }, ContactRequest>({
      queryFn: async (values) => {
        try {
          const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
          const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
          const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

          // If keys are not configured, simulate success for development
          if (
            !serviceId ||
            !templateId ||
            !publicKey ||
            serviceId === 'your_service_id'
          ) {
            console.warn('EmailJS is not fully configured. Simulating success...')
            await wait(800)
            return { data: { ok: true } }
          }

          await emailjs.send(
            serviceId,
            templateId,
            {
              from_name: values.name,
              from_email: values.email,
              message: values.message,
            },
            publicKey
          )

          return { data: { ok: true } }
        } catch (error) {
          console.error('EmailJS Error:', error)
          return { error: { reason: 'Failed to send email. Please check console.' } }
        }
      },
      invalidatesTags: ['Contact'],
    }),
  }),
})

export const {
  useGetFeaturedProjectsQuery,
  useGetProjectsQuery,
  useGetSignalsQuery,
  useGetSkillsQuery,
  useSendContactMutation,
} = portfolioApi
