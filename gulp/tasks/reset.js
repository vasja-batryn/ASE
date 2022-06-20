import del from "del"; // this is a plugin for deleting files
export const reset = () => {
	return del(app.path.clean);
}