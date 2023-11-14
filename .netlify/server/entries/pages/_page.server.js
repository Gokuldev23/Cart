async function load({ locals }) {
  if (locals.pb.authStore.baseToken) {
    return {
      profile: locals.pb.authStore.baseModel
    };
  }
}
export {
  load
};
