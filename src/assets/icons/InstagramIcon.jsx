const InstagramIcon = (props) => {
  return (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <g transform="translate(8, 8)">
        <rect 
          x="2" 
          y="2" 
          width="20" 
          height="20" 
          rx="5" 
          ry="5" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <line 
          x1="17.5" 
          y1="6.5" 
          x2="17.51" 
          y2="6.5" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export default InstagramIcon;