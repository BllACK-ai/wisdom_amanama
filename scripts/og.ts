import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
import { profile } from '../src/profile.ts'

const W = 1200
const H = 630
const PAD = 80

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

function font(file: string) {
  return readFileSync(resolve(root, 'scripts/fonts', file))
}

const [regular, medium, semibold] = ['Inter-Regular.ttf', 'Inter-Medium.ttf', 'Inter-SemiBold.ttf'].map(font)

type Node = { type: string; props: { style: Record<string, unknown>; children: Node | Node[] | string } }

const card: Node = {
  type: 'div',
  props: {
    style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: PAD,
        backgroundColor: '#000000',
        backgroundImage: 'radial-gradient(760px at 50% 42%, rgba(211,220,234,0.18), rgba(0,0,0,0) 72%)',
        fontFamily: 'Inter',
        color: '#f2f2f4',
      },
    children: [
      {
        type: 'div',
        props: {
          style: {
            display: 'flex',
            fontSize: 104,
            fontWeight: 600,
            letterSpacing: -2.5,
            lineHeight: 1.05,
          },
          children: profile.name,
        },
      },
      {
        type: 'div',
        props: {
          style: {
            display: 'flex',
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 40,
            padding: '0 34px',
            height: 68,
            borderRadius: 34,
            backgroundImage: 'linear-gradient(180deg, #eef1f6 0%, #ccd3de 55%, #aeb6c4 100%)',
            color: '#0a0a0b',
            fontSize: 34,
            fontWeight: 500,
            letterSpacing: -0.2,
          },
          children: profile.role,
        },
      },
      {
        type: 'div',
        props: {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            marginTop: 52,
            color: '#78787f',
            fontSize: 25,
            fontWeight: 500,
            letterSpacing: 1.2,
          },
          children: [
            { type: 'div', props: { style: { display: 'flex', width: 56, height: 2, backgroundColor: 'rgba(211,220,234,0.35)' }, children: '' } },
            { type: 'div', props: { style: { display: 'flex' }, children: 'ML · COMPUTER VISION · SIMULATION' } },
          ],
        },
      },
    ],
  },
}

const svg = await satori(card as unknown as Parameters<typeof satori>[0], {
  width: W,
  height: H,
  fonts: [
    { name: 'Inter', data: regular, weight: 400, style: 'normal' },
    { name: 'Inter', data: medium, weight: 500, style: 'normal' },
    { name: 'Inter', data: semibold, weight: 600, style: 'normal' },
  ],
})

const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: W } })
const png = resvg.render().asPng()

const outDir = resolve(root, 'public')
mkdirSync(outDir, { recursive: true })
writeFileSync(resolve(outDir, 'og.svg'), svg)
writeFileSync(resolve(outDir, 'og.png'), png)

console.log(`og.png written: ${W}x${H}, ${(png.length / 1024).toFixed(1)} KB`)
