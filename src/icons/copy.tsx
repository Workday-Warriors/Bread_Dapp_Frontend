interface Props {
  className?: string
}

export const CopyIcon = ({ className }: Props) => (
  <svg
    className={className}
    width='16'
    height='18'
    viewBox='0 0 16 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M2.00044 3.12787L2 12.75C2 14.7382 3.5473 16.3651 5.50344 16.492L5.75 16.5L12.3716 16.5011C12.0624 17.3744 11.2293 18 10.25 18H5C2.51472 18 0.5 15.9853 0.5 13.5V5.25C0.5 4.27017 1.12631 3.43663 2.00044 3.12787ZM13.25 0C14.4926 0 15.5 1.00736 15.5 2.25V12.75C15.5 13.9926 14.4926 15 13.25 15H5.75C4.50736 15 3.5 13.9926 3.5 12.75V2.25C3.5 1.00736 4.50736 0 5.75 0H13.25Z'
      fill='currentColor'
    />
  </svg>
)
