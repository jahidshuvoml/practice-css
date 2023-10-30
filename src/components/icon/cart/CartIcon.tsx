export default function CartIcon(props: { variant?: "white" }) {
  const fill = props.variant ?? "#937DC2";
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.24659 0.233604C0.582926 0.233604 0.0449219 0.771609 0.0449219 1.43527C0.0449219 2.09893 0.582926 2.63694 1.24659 2.63694H2.71169L3.07887 4.10567C3.08272 4.12265 3.08694 4.13949 3.0915 4.15619L4.72244 10.6799L3.64986 11.7525C2.13585 13.2665 3.20813 15.8553 5.34928 15.8553H15.6665C16.3302 15.8553 16.8682 15.3173 16.8682 14.6536C16.8682 13.9899 16.3302 13.4519 15.6665 13.4519L5.34928 13.4519L6.55094 12.2503H14.4649C14.9201 12.2503 15.3362 11.9931 15.5397 11.586L19.1447 4.37601C19.331 4.0035 19.3111 3.56112 19.0921 3.20685C18.8732 2.85258 18.4864 2.63694 18.0699 2.63694H5.18899L4.81571 1.14382C4.68197 0.608882 4.20133 0.233604 3.64992 0.233604H1.24659Z"
        fill={fill}
      />
      <path
        d="M16.8683 18.8594C16.8683 19.8549 16.0612 20.6619 15.0658 20.6619C14.0703 20.6619 13.2633 19.8549 13.2633 18.8594C13.2633 17.8639 14.0703 17.0569 15.0658 17.0569C16.0612 17.0569 16.8683 17.8639 16.8683 18.8594Z"
        fill={fill}
      />
      <path
        d="M5.45242 20.6619C6.44792 20.6619 7.25492 19.8549 7.25492 18.8594C7.25492 17.8639 6.44792 17.0569 5.45242 17.0569C4.45693 17.0569 3.64992 17.8639 3.64992 18.8594C3.64992 19.8549 4.45693 20.6619 5.45242 20.6619Z"
        fill={fill}
      />
    </svg>
  );
}
