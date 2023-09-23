import Table from "./Table";
import Tile from "./Tile";
import styles from "./Tiles.module.css";

// TODO: remove
const customers = [
  {
    _id: 88723956932,
    name: "Aditya",
    phone: "9876543211",
    email: "aditya@email.com",
    address: "Plot no 349, Belgaum, Karnataka",
  },
  {
    _id: 887239565325,
    name: "Elon Musk",
    phone: "9876543212",
    email: "elon@email.com",
    address: "Plot no 350, Belgaum, Karnataka",
  },
  {
    _id: 88723956917,
    name: "Bill Gates",
    phone: "9876543213",
    email: "bill@email.com",
    address: "Plot no 351, Belgaum, Karnataka",
  },
];

function Tiles() {
  return (
    <section className={styles.tiles}>
      <Tile tag="actions">
        <h3>Awaiting your action</h3>
      </Tile>
      <Tile tag="orders">
        <h3>Manage orders</h3>
      </Tile>
      <Tile tag="inventory">
        <h3>Manage Inventory</h3>
      </Tile>
      <Tile tag="sales">
        <h3>Sales and Revenue</h3>
      </Tile>
      <Tile tag="customers">
        <h3>Customers</h3>
        {/* TODO: fetch top 5 entries with name, phone using mongoDB */}
        <Table data={customers} cols={["name", "phone"]} />
      </Tile>
    </section>
  );
}

export default Tiles;
