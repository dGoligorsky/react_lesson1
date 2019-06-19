const Highlight = ({color, children}) => (
    <span className={`relative highlight highlight-${color}`}>
        <span className={'relative z-2'}>{children}</span>
    </span>
)

const Intro = () => (
        <div className="m-auto-ns f4 f3-m f2-l tc w-80-l normal">
            <div className="mb3 mb4-ns">
                <Highlight color='aqua'>Lost in Tokyo </Highlight> is a directory of fun places to see, play in and <Highlight color='yellow'>explore</Highlight>, in <Highlight color='blue'>Tokyo</Highlight>, Japan.{''}
            </div> 
            <div>
                From <Highlight color='blue'>musems</Highlight> and <Highlight color='blue'>galleries</Highlight>, to <Highlight color='pink'>robot restaurants</Highlight> and <Highlight color='pink'>kitten cafes</Highlight>, Tokyo is the gift that keeps on giving. <Highlight color='yellow'>Dattebayo!</Highlight>{''}
            </div>
        </div>
    );


// the ({className, href, children}) grabs our properties directly
// it means we don't have to type out props.className, props.href, etc. every time
// it's called destructuring

const NavItem = ({className, href, children, logo}) => (
    <li className={`mh2-ns f6 f4-l tc ${className}`}>
        <a className="white no-underline" href={href}>
            {/* here we check for the logo prop (using a "ternary operator" x ? y : z), if we have it we render out our logo otherwise we just render out our regular navigation text (children prop)
            */}
        {logo ? <img src="../images/logo.svg" className="db center logo" /> : children}
        </a>
    </li>
)

const Nav = () => (
    <nav className='pt3 pt4-ns mb4 mb0-ns'>
        <ul className='list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0'>
            {menu.map(item => (
                <NavItem {...item} />
            ))}
        </ul>
    </nav>
);

// we can also create components as classes
// these give us more advanced functionality and features such as the component lifecucle as well as react's in-built state

class Attraction extends React.Component {
    
        constructor(props) {
            super(props)
            this.state = {
                fullName: ''
            }
        }

    render () {
        const {title, description, className, image} = this.props
        return(
            <div
            className={`ph4 ph5-ns ph0-l mb4 mb5-ns w-100 overflow-hidden pointer attraction ${className}`}
            >
            
            <input 
                className="relative z-3"
                onChange = { event => 
                    this.setState({
                        fullName: event.target.value
                    })
                } 
            />

            <h1>{this.state.fullName}</h1>

            <div className="relative">
                <div className="absolute w-100 h-100 flex items-center pa3 pa4-ns bg-aqua overlay">
                    <div>
                        <h1 className="f4 f3-ns mt0 mb2 regular black normal lh-title">{title}</h1>
                        <p className="lh-title lh-copy-ns mv0 black f6 measure-l">{description}</p>
                    </div>
                </div>
                <img src={`../images/${image}`} className="db" />
            </div>
          </div>
        )
    }
}

const App = () => (
    <div>
        <div className="min-vh-100 ph4 flex flex-column">
            {/* our navigation component */}
            <Nav />
            <Intro />
        </div>
        <div className="flex flex-wrap container"> 
            {attractions.map(attraction => 
                <Attraction {...attraction} />        
            )}
        </div>
    </div>
); 

ReactDOM.render(<App />, document.getElementById('root'));
