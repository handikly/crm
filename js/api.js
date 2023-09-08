const ACTUALITEDB = "actualiteDB"

function getLocalDB(){
    if(!localStorage.getItem(ACTUALITEDB)){
        localStorage.setItem(ACTUALITEDB,JSON.stringify([]))
    }
    return JSON.parse(localStorage.getItem(ACTUALITEDB))
}

function updateDB(db){
    localStorage.setItem(ACTUALITEDB,JSON.stringify(db))
}
function addActualite(actualite){
    const db = getLocalDB()
    actualite.id = Date.now()+""
    db.push(actualite)
    updateDB(db)
}
function updateActualite(actualite){
    const db=getLocalDB()
    const updateDb = db.map(function(curActualite){
        if(curActualite.id == actualite.id){
            return {
                contenu: actualite.contenu,
                image: actualite.image,

                id: actualite.id
            }
        }
        return curActualite
    })
    updateDB(updateDb)
}

function deleteActualite(actualite){
    const db=getLocalDB()
    const updateDb = db.filter(function(curActualite){
        return curActualite.id != actualite.id
    })
    updateDB(updateDb)
}

function getActualite(id){
    const db=getLocalDB();
    var filterDb = db.filter((data)=>data.id==id)
    if(filterDb.length>0){
        return filterDb[0]
    }
    return null
}

