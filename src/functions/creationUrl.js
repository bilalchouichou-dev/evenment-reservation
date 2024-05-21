const creationPath =(path,prix,date,categorie,ville)=>{
    let fullPath = path + '?'
    let parametres = [prix,date,categorie,ville]
    let parametresName = ["prix","date","categorie","ville"]
    let validParametres = []
    parametres.forEach((element,index) => {
        if (element !== undefined && element !== null && element !== '') {
            validParametres.push(parametresName[index] + '=' + element)
        }
    });
    fullPath += validParametres.join("&")
    return fullPath
}
export {creationPath};