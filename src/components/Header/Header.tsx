import './Header.css'

export const Header = () => {
  return (
    <div className="header">
      <img src="/images/ease.svg" alt="logo" />

      <ul>
        <li><a href="#">Collection</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
};
