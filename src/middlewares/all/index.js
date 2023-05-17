const all = (ctx, next) => {
    console.log("All middleware")
    return next()
}
export default all