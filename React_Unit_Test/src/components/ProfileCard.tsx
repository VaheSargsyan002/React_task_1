import Badge from "./Badge";
import { formatFullName, formatRole } from "../utils/profile";

type ProfileCardProps = {
  firstName: string;
  lastName: string;
  role: string;
};

function ProfileCard({ firstName, lastName, role }: ProfileCardProps) {
  const fullName = formatFullName(firstName, lastName);
  const displayRole = formatRole(role);

  return (
    <section className="card profile-card">
      <p className="section-label">Member</p>
      <h2>{fullName}</h2>
      <p className="profile-role">{displayRole}</p>
      <Badge label="Active Member" />
    </section>
  );
}

export default ProfileCard;
