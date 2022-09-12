import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import Card from "../UI/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const FavoritesCtx = useContext(FavoritesContext);
  const isFavorite = FavoritesCtx.isFavorite(props.id);

  function toggleFavoriteStatus_Handler() {
    if (isFavorite) {
      FavoritesCtx.removeFavorite(props.id);
    } else {
      FavoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        address: props.address,
        description: props.description,
        image: props.image,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatus_Handler}>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
