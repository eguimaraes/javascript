const mat=[1,2,3,4]
mat.filter(el=>el===1)
mat.filter(el=>el>=1)
mat.filter(el=>el>=3)
mat.filter(el=>el>=3)
mat.filter(el=>el>=3).every(el=>console.log(el))
mat.filter(el=>el>=3).forEach(el=>console.log(el))
