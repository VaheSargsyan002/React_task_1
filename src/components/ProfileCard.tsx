import "./ProfileCard.css";

type ProfileCardProps = {
  name: string;
  title: string;
  imageUrl: string;
};

function ProfileCard({ name, title, imageUrl }: ProfileCardProps) {
  return (
    <div className="profile-card">
      <img className="profile-card__image" src={imageUrl} alt={name} />
      <h2 className="profile-card__name">{name}</h2>
      <p className="profile-card__title">{title}</p>
    </div>
  );
}

export default ProfileCard;
