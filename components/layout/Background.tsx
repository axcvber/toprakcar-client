import { Box } from '@mui/material'
import Image from 'next/image'

interface IBackground {
  src: string
  alt: string
}

const Background: React.FC<IBackground> = ({ src, alt }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        '&:after': {
          content: '""',
          background: 'rgba(0,0,0,0.5)',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
      }}
    >
      <Image
        priority
        layout='fill'
        objectFit='cover'
        src={src}
        objectPosition='center center'
        blurDataURL={src}
        alt={alt}
      />
    </Box>
  )
}

export default Background
