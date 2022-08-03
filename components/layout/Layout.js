import classes from './Layout.module.css'

function Layout(props) {
    return (
        <div>
            <div>TopBar</div>
            <main className={classes.main}>{props.children}</main>
        </div>
    )
}

export default Layout