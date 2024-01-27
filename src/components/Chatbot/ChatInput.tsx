import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'

interface ChatInputProps extends HTMLAttributes<HTMLDivElement>{
  
}

const ChatInput: FC<ChatInputProps> = ({className, ...props}) => {
  return <div {...props} className={cn('border-t border-zinc-300', className)}>ChatInput</div>
}

export default ChatInput