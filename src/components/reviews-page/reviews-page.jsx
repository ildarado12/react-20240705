import { Outlet } from "react-router-dom";
import { ReviewsList } from "../reviews-list/reviews-list";

export const ReviewsPage = ({ id }) => {
  return (
    <div>
      <ReviewsList id={id} />
      <Outlet />
    </div>
  );
};
