function getElementWidth(content, padding, border){
    const totalWidth = Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2;
return totalWidth;

};
console.log(getElementWidth("50px", "8px", "4px"));