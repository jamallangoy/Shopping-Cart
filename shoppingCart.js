function ShoppingCart({ inventory }){
    const { Button } = ReactBootstrap;
    const [stock, setStock] = React.useState(inventory);
    const [cart, setCart] = React.useState([]);

    const addToCart = e => {
        let [product, numOf] = e.target.innerHTML.split(':');
        if (numOf <= 0) return;
        let item = stock.filter((item) => item.product == product);
        let currentStock = stock.map((item) => {
            if (item.product == product) item.inStock--;
            return item
        })

        setStock([...currentStock])
        setCart([...cart, ...item])
    }

    const inventoryButton = inventory.map((item, index) => {
        return(
            <Button id={item.product} key={index} onClick={addToCart}  style={{margin:"5px"}}>{item.product}:{item.inStock}</Button>
        )
    })

    return(
        <>
            <h2 style={{margin:"5px 35px"}}>Our Inventory</h2>
            <ul>{inventoryButton}</ul>
            <h2 style={{margin:"5px 35px"}}>Your Cart</h2>
            <Cart cartItems={cart} />
        </>
    )
};

function Cart({ cartItems }){
    const { Button } = ReactBootstrap;

    let inventoryCard = cartItems.map((item, index) => {
        return (
            <>
            <div class="card" style={{width:"12rem", height: "auto", margin:"5px"}}key={index} id={item.product}>
                <img class="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{item.product}</h5>
                    <p class="card-text">You have just added {item.product} to your cart!</p>
                    <a href="https://www.youtube.com/watch?v=MTqYwC6PBio" class="btn btn-primary">View Product Details...</a>
                </div>
            </div>
            {/* <Button key={index} id={item.product} style={{margin: "5px"}}>{item.product}</Button> */}
        </>
        )
    });

    return(
        <>
            <ul id='cart-items' key='cart'>{inventoryCard}</ul>
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