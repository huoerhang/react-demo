import React, { useEffect } from 'react'

const useChangeTitle = (title) => {
    useEffect(() => {
        document.title = title;
    }, [title])
}

export default (props)=>{
    useChangeTitle("自定义修改标题Hooks");
    return (
        <div>
            自定义Hooks
        </div>
    )
}