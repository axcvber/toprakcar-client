import React from 'react'
import ReactMarkdown from 'react-markdown'
import { styled } from '@mui/material/styles'

interface IMarkdown {
  content?: string
}

const Markdown: React.FC<IMarkdown> = ({ content }) => {
  if (!content) return null
  return <StyledMarkdown>{content}</StyledMarkdown>
}

const StyledMarkdown = styled(ReactMarkdown)(({ theme }) => ({
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

export default Markdown
