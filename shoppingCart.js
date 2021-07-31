function ShoppingCart({ inventory }){
    const { Button } = ReactBootstrap;
    const [stock, setStock] = React.useState(inventory);

    const addToCart = e => {
        let [product, numOf] = e.target.innerHTML.split(':');
        if (numOf <= 0) return;
        let item = stock.filter((item) => item.product == product);
        let currentStock = stock.map((item) => {
            if (item.product == product) item.inStock--;
            return item
        })

        setStock([...currentStock])
    }

    const inventoryButton = inventory.map((item, index) => {
        return(
            <Button id={item.product} key={index} onClick={addToCart}  style={{margin:"5px"}}>{item.product}:{item.inStock}</Button>
        )
    })

    return(
        <>
            <h2 style={{margin:"35px"}}>Our Inventory</h2>
            <ul>{inventoryButton}</ul>
        </>
    )
}

const inventory = [
        { product: 'Jacket', inStock: 2 },
        { product: 'Pants', inStock: 3 },
        { product: 'Scarf', inStock: 0 },
        { product: 'Pajamas', inStock: 3 },
        { product: 'Shirt', inStock: 1 },
      ];

ReactDOM.render(

    <ShoppingCart inventory={inventory} />,
     document.getElementById('root')
     
)





//----------------- My First Finished Copy By Myself :) ----------------------

// function ShoppingCart({ inventory }){
//     const { Button } = ReactBootstrap;
//     const [stock, setStock] = React.useState(inventory);
//     const [cart, setCart] = React.useState([]);

//      const placeInCart = e => {
//          let [product, numOf] = e.target.innerHTML.split(':');
//          if (numOf <= 0) return;
//          let item = stock.filter((item) => item.product == product);
         
//          let newInventory = stock.map((item) => {
//              if (item.product == product) item.inStock--;
//              return item
//          })
         
//          setStock([...newInventory]);
//          setCart([...cart, ...item])
//      }  
     
//         let inventoryButtons = inventory.map((item, index) =>{
//             return(
//                 <Button key={index} id={item.product} onClick={placeInCart}>{item.product}:{item.inStock}</Button>
//             )
//         })



//     return(
//         <>
//             <h3>Store Inventory</h3>
//             <ul key='stock'>{inventoryButtons}</ul>
//             <h3>Shopping Cart Items</h3>
//             <Cart cartItems={cart} />

//         </>
//     )
// };

// function Cart ({cartItems}){
//     const { Button } = ReactBootstrap;
//     const inventoryButtons = cartItems.map((item, index) => {
//         return(
//             <Button id={item.product} key={index}>
//             {item.product}
//             </Button>
//         );
//     });
//     return(
//         <ul id='cart-items' key='cart'>{inventoryButtons}</ul>
//     )
// }


// const inventory = [
//     { product: 'Jacket', inStock: 2 },
//     { product: 'Pants', inStock: 3 },
//     { product: 'Scarf', inStock: 0 },
//     { product: 'Pajamas', inStock: 3 },
//     { product: 'Shirt', inStock: 1 },
//   ];

// ReactDOM.render(
//     <ShoppingCart inventory={inventory} />,
//     document.getElementById('root')
// )