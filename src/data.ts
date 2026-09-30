import { GitHub, Linkedin, Mail, type Icon } from 'react-feather'

export type Item = { when: string; title: string; href?: string; body: string; tags?: string[] }
export type Social = { label: string; href: string; icon: Icon }
export type Service = { title: string; body: string }

export const profile = {
  name: 'Your Name',
  role: 'Simulation, ML & Vision Engineer',
  tagline: 'Machine learning, computer vision and engineering simulation, delivered end to end with the reports and defense materials to match.',
  socials: [
    { label: 'GitHub', href: '#', icon: GitHub },
    { label: 'LinkedIn', href: '#', icon: Linkedin },
    { label: 'Email', href: '#', icon: Mail },
  ] satisfies Social[],
}

export const about = [
  'I build machine learning, computer vision and simulation work for engineering and energy clients. Recent work covers fault detection on a three-phase transmission line, solar station modeling with MPPT, and drone-based vision flown for real inspection tasks.',
  'Most of it starts as a model: a set of differential equations, a frequency spectrum, or a labeled dataset. I build it in Python, validate it against measurements or a prototype, and hand over something that holds up under questioning, which matters when the work still has to stand up in a defense.',
  'I also teach numerical methods and Python to postgraduate and beginner students, and write and format the academic and technical reports that come with the projects.',
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
  { title: 'Final-year and technical projects', body: 'Full builds, reports and defense materials, end to end.' },
  { title: 'Mathematical modeling and simulation', body: 'Engineering and energy systems modeled, solved and documented.' },
  { title: 'Machine learning for industrial data', body: 'Fault detection and applied ML on industrial and energy datasets.' },
  { title: 'Signal and vibration analysis', body: 'FFT-based frequency analysis and filtering of noisy sensor data.' },
  { title: 'Computer vision projects', body: 'Detection, segmentation and recognition from images and drone video.' },
  { title: 'Mobile and backend development', body: 'Android, Flutter, FastAPI and MongoDB builds, delivered with a trusted development partner.' },
  { title: 'Data cleaning and exploratory analysis', body: 'Turning raw sensor and IoT logs into something you can reason about.' },
  { title: 'Technical and academic report writing', body: 'Writing, editing and formatting, including digitizing scanned documents into Word.' },
  { title: 'Slide presentations', body: 'Concise decks that carry a technical argument.' },
  { title: 'Python and numerical methods tutoring', body: 'One-to-one or cohort tutoring for postgraduate and beginner students.' },
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