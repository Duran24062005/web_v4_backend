export function Blogs(req, res) {
    res.send("Blogs controller response");
}


export function filterById(req, res) {
    res.send("Blogs controller response " + req.params.id);
}


export function createNewBlog(req, res) {
    res.send("Blogs controller response");
}


export function updatedBlog(req, res) {
    res.send("Blogs controller response " + req.params.id);
}


export function deleteBlog(req, res) {
    res.send("Blogs controller response " + req.params.id);
}