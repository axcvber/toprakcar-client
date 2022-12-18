import React from 'react'
import ReactMarkdown from 'react-markdown'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

interface IMarkdown {
  content?: string
}

export const Markdown: React.FC<IMarkdown> = ({ content }) => {
  if (!content) return null
  return (
    <StyledMarkdown
      sx={{
        '*': {
          mb: 2,
        },
      }}
      components={{
        h1: ({ node, ...props }) => <Typography variant='h1'>{props.children}</Typography>,
        h2: ({ node, ...props }) => <Typography variant='h2'>{props.children}</Typography>,
        h3: ({ node, ...props }) => <Typography variant='h3'>{props.children}</Typography>,
        h4: ({ node, ...props }) => <Typography variant='h4'>{props.children}</Typography>,
        h5: ({ node, ...props }) => <Typography variant='h5'>{props.children}</Typography>,
        h6: ({ node, ...props }) => <Typography variant='h6'>{props.children}</Typography>,
      }}
    >
      {content}
    </StyledMarkdown>
  )
}

const StyledMarkdown = styled(ReactMarkdown)(({ theme }) => ({
  'h1,h2,h3,h4,h5,h6': {
    fontWeight: 600,
    marginBottom: '10px',
  },
  'ul li': {
    marginBottom: '10px',
    position: 'relative',
    paddingLeft: '20px',
    lineHeight: 1.5,
    '&:last-child': {
      marginBottom: 0,
    },
    '&::before': {
      content: '""',
      width: '8px',
      height: '8px',
      backgroundColor: theme.palette.primary.main,
      display: 'flex',
      marginRight: '10px',
      borderRadius: '50px',
      position: 'absolute',
      top: 8,
      left: 0,
    },
  },
  'p': {
    lineHeight: 2,
    color: theme.palette.text.secondary,
  },
}))
