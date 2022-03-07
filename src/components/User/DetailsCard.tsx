import css from "./DetailsCard.module.css";
// interface dummyDataProps {
//   data: { id: number; pic: string; name: string; email: string }[];
//   currHoveredState?: (state: boolean) => void;
// }
function DetailsCard({ id }: any) {
  return (
    <div className={css["card"]} id={id}>
      <img
        className={css["profile_img"]}
        src="https://randomuser.me/api/portraits/med/women/75.jpg"
        alt="no preivew available"
        height={85}
        width={90}
      />
      <div className={css["profile_name"]}>Leon Hunt</div>
      <div className={css["profile_email"]}>something@xyz.com</div>
      <div className={css["profile_plan"]}>Your Plan:Standard</div>
      <div className={css["profile_status"]}>
        <button
          type="button"
          className={`btn btn-warning ${css["custom_btn_class"]}`}
        >
          Active User
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
                // aria-valuenow="25"
                // aria-valuemin="0"
                // aria-valuemax="100"
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
