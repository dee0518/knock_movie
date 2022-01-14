function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { 
        images[item.replace('./', '')] = r(item); 
        
        return item
    });
    
    return images;
}

export const image = importAll(require.context('./image', false, /\.(png|jpe?g|svg)$/));
