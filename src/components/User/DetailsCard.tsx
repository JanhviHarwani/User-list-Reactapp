import css from "./DetailsCard.module.css";
import UserType from "../../Interfaces/UserType";

interface ProfileType {
  hoveredUserProfile: UserType;
}

function DetailsCard({ hoveredUserProfile }: ProfileType) {
  return (
    <div className={css["card"]}>
      <img
        className={css["profile_img"]}
        src={hoveredUserProfile.avatar}
        alt="no preivew available"
        height={85}
        width={90}
      />
      <div className={css["profile_name"]}>
        {hoveredUserProfile.first_name} {hoveredUserProfile.last_name}
      </div>
      <div className={css["profile_email"]}>{hoveredUserProfile.email}</div>
      <div className={css["profile_plan"]}>Your Plan:Standard</div>
      <div className={css["profile_status"]}>
        <button
          type="button"
          className={`btn btn-warning ${css["custom_btn_class"]}`}
        >
          Inactive User
        </button>
      </div>
      <div className={css["plan_uses_container"]}>
        <div className={css["plan_uses_bar"]}>
          <div className={css["title"]}>Plan Uses</div>
          <div className={css["bar"]}>
            <div className="progress" style={{ height: "5px" }}>
              <div
                className={`progress-bar ${css["cutom_progress_class"]}`}
                role="progressbar"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className={css["clicks_data"]}>
          <div className={css["clicks_reviewed"]}>
            <div style={{ paddingRight: "10px" }}>
              <div className={css["clicks_data_number"]}>2,450</div>
              <div className={css["clicks_title"]}>clicks reviewed</div>
            </div>
          </div>
          <div className={css["monthly_clicks"]}>
            <div style={{ paddingLeft: "10px" }}>
              <div className={css["clicks_data_number"]}>5000</div>
              <div className={css["clicks_title"]}>Monthly clicks</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsCard;
