const styles = () => ({
    icon: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 100
      },
      globalLoading:{
        position: 'fixed',
        left:0,
        right:0,
        top:0,
        bottom:0,
        zIndex:99,
        background: 'rgba(0,0,0,0.4)'
    }
})

export default styles;