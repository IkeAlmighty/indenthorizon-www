export async function post({ request }) {
	// TODO: store the initialState from the body
	// TODO: store the actionHistory from the body
	// TODO: store the finalState hash from the body
	// TODO: using initialState as a starting point,
	// run every action in a sped up shard instance
	// until the final state is reached.
	// TODO: hash the final state found, and then
	// compare to the final state given in the post
	// request.
	// TODO: flag if the hash does not match the hash
	// taken from the post request, and deactivate the
	// shards key
}

// FIXME: (this is a big one): Most likely should
// dedicate a server to this action in the future, when the game
// grows
