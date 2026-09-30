import { GitHub, Linkedin, Mail, type Icon } from 'react-feather'
import { email, profile as identity } from './profile'

export type Item = { when: string; title: string; href?: string; body: string; tags?: string[] }
export type Social = { label: string; href: string; icon: Icon }
export type Service = { title: string; body: string }

export { email, profile } from './profile'

export const socials = [
  { label: 'GitHub', href: identity.github, icon: GitHub },
  { label: 'LinkedIn', href: identity.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${email}`, icon: Mail },
] satisfies Social[]

export const about = [
  'ML, computer vision and simulation that survive engineering review.',
  'Every model is validated against measurements or real hardware, then documented so it holds up when someone else examines it. MPPT against a built prototype, fault detection against an ODE simulation.',
]

export const projects: Item[] = [
  {
    when: 'Machine Learning',
    title: 'Fault detection and diagnosis for a three-phase transmission line',
    body: 'Random Forest classifiers trained on a custom Python ODE-based simulation. Full academic report and defense documentation included.',
    tags: ['Python', 'Random Forest', 'ODE Simulation'],
  },
  {
    when: 'Machine Learning',
    title: 'Compact solar power station with MPPT',
    body: 'Modeled and simulated a compact solar power station, including an MPPT algorithm validated against a physical prototype.',
    tags: ['MPPT', 'Solar Modeling', 'Simulation'],
  },
  {
    when: 'Energy Systems',
    title: 'Standalone PV system for a mechatronics lab',
    body: 'Designed, simulated and installed a standalone photovoltaic power system for a university mechatronics laboratory. Delivered as a final-year project.',
    tags: ['Photovoltaics', 'Power Systems', 'Installation'],
  },
  {
    when: 'Signal Processing',
    title: 'Vibration monitoring pipeline',
    body: 'Vibration monitoring built on forward and central difference numerical schemes.',
    tags: ['Numerical Methods', 'Vibration'],
  },
  {
    when: 'Signal Processing',
    title: 'FFT-based signal isolation',
    body: 'Python FFT pipeline for isolating signal frequencies, including a two-frequency case resolved by magnitude thresholding.',
    tags: ['Python', 'FFT', 'Filtering'],
  },
  {
    when: 'Data Analysis',
    title: 'IoT sensor log cleaning and EDA',
    body: 'Cleaning and exploratory analysis of IoT sensor telemetry logs.',
    tags: ['IoT', 'Pandas', 'EDA'],
  },
  {
    when: 'Computer Vision',
    title: 'Drone-based color detection',
    body: 'Color detection from drone imagery using YOLOv8 segmentation, KMeans clustering and HSV classification.',
    tags: ['YOLOv8', 'KMeans', 'OpenCV'],
  },
  {
    when: 'Computer Vision',
    title: 'Drone hand-gesture control',
    body: 'Seven hand gestures captured with MediaPipe and mapped to drone commands.',
    tags: ['MediaPipe', 'Gesture Recognition'],
  },
  {
    when: 'Computer Vision',
    title: 'Shape recognition module',
    body: 'Shape recognition combining YOLOv8 segmentation with OpenCV contour analysis.',
    tags: ['YOLOv8', 'OpenCV', 'Contours'],
  },
]

export const services: Service[] = [
  {
    title: 'Final-year and technical projects',
    body: 'Full project builds from problem statement to submission, including the code, the report and the defense materials. I work the scope down early, so it still fits when your supervisor reads it.',
  },
  {
    title: 'Mathematical modeling and simulation',
    body: 'Engineering and energy systems modeled from first principles and solved numerically, in MATLAB or Python. Includes parameter studies and sensitivity analysis, so you can see where the result stops being trustworthy.',
  },
  {
    title: 'Machine learning for industrial data',
    body: 'Fault detection and classification on industrial and energy datasets, from sensor time series to labeled failure records. Model choice, validation and error analysis documented, not just a notebook that happens to run.',
  },
  {
    title: 'Signal and vibration analysis',
    body: 'FFT-based frequency analysis for isolating components in noisy signals, with filtering and spectral density estimation on top. Built on measured data where it exists, synthetic where it does not.',
  },
  {
    title: 'Computer vision projects',
    body: 'Object detection, segmentation and recognition from stills and drone video. YOLOv8, MediaPipe and OpenCV pipelines, delivered with the training data and the inference code alongside them.',
  },
  {
    title: 'Mobile and backend development',
    body: 'Android, Flutter, FastAPI and MongoDB builds, delivered with a trusted development partner. Covers the API design, the data modeling, and the app side that has to talk to it.',
  },
  {
    title: 'Data cleaning and exploratory analysis',
    body: 'Raw sensor and IoT telemetry cleaned into something you can reason about: missing values, outliers, resampling and drift. Analysis that answers a question, rather than a wall of charts.',
  },
  {
    title: 'Technical and academic report writing',
    body: 'Writing, editing and formatting, including digitizing scanned documents into Word. Structured to a standard you can actually defend, with figures, tables and references handled properly.',
  },
  {
    title: 'Slide presentations',
    body: 'Concise decks that carry a technical argument instead of summarizing one. Built for a defense or a review, where the slide has to support what you say rather than replace it.',
  },
  {
    title: 'Python and numerical methods tutoring',
    body: 'One-to-one or cohort tutoring for postgraduate and beginner students, covering numerical differentiation and integration in Python. Sessions come with handouts and worked exercises.',
  },
]

export const teaching: Item[] = [
  { when: 'Postgraduate', title: 'Numerical Methods in Python', body: 'Taught numerical differentiation and integration in Python to postgraduate students.' },
  { when: 'Beginner', title: 'Python Foundations', body: 'Designed and delivered a five-lecture beginner Python course with handouts and exercises.' },
]

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'teaching', label: 'Teaching' },
]