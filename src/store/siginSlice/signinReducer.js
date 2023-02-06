
export const siginFullfilledReducer = (builder, action)=>{
    builder.addCase(action.fulfilled,(state, {payload})=>{
        console.log(payload);
    })
}