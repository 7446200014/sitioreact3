//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div className="container">
	<header class="row bg-warning">
		(Header-Cabecera)
	</header>

	<nav class="row bg-secondary">
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container-fluid">
			  <a class="navbar-brand" href="#">Navbar</a>
			  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
				<ul class="navbar-nav">
				  <li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					  Dropdown 1
					</a>
					<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
					  <li><a class="dropdown-item" href="#">Action</a></li>
					  <li><a class="dropdown-item" href="#">Another action</a></li>
					  <li><a class="dropdown-item" href="#">Something else here</a></li>
					</ul>
				  </li>
				</ul>
				<div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
					<ul class="navbar-nav">
					  <li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						  Dropdown 2
						</a>
						<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
						  <li><a class="dropdown-item" href="#">Action</a></li>
						  <li><a class="dropdown-item" href="#">Another action</a></li>
						  <li><a class="dropdown-item" href="#">Something else here</a></li>
						</ul>
					  </li>
					</ul>
			  </div>
			</div>
			</div>
		</nav>
	</nav>

	<section class="row bg-primary"> 
		<article class="col-md-5 bg-danger">
			Articulo 1
			<img src="https://i.ibb.co/wN2psbw/989289-w944h530c1cx511cy250.jpg" class="img-thumbnail" alt="..."/>	
			Los hábitats dónde vive el colibrí son igual de diversos que de tipos existen. Suelen estar distribuidos por el mundo con gran número de ellos en Chile, argentina, alaska y sobre todo en Ecuador.
		</article>

		<article class="col-md-3 bg-success">
<article class="col-md-2 ">
			<div class="d-grid gap-2 col-6 mx-auto">
				<button type="button" class="btn btn-primary">Primary</button>
				<button type="button" class="btn btn-btn-outline--secondary">Secondary</button>
				<button type="button" class="btn btn-success">Success</button>
				<button type="button" class="btn btn-danger">Danger</button>
				<button type="button" class="btn btn-warning">Warning</button>
				<button type="button" class="btn btn-info">Info</button>
				<button type="button" class="btn btn-light">Light</button>
				<button type="button" class="btn btn-dark">Dark</button>
				<button type="button" class="btn btn-link">Link</button>
			  </div>
		</article>
		</article>

		<aside class="col-md-4 bg-primary">
			<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
				<div class="carousel-inner">
				  <div class="carousel-item active">
					<img src="https://i.ibb.co/J7Z4MwN/150504.jpg" class="d-block w-100" alt="..."/>
				  </div>
				  <div class="carousel-item">
					<img src="https://i.ibb.co/P6QKGxk/animales-fauna-naturaleza-504959968-155649339-1706x960.jpg" class="d-block w-100" alt="..."/>
				  </div>
				  <div class="carousel-item">
					<img src="https://i.ibb.co/Fb6H5vb/animales-de-australia-2.jpg" class="d-block w-100" alt="..."/>
				  </div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
				  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
				  <span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
				  <span class="carousel-control-next-icon" aria-hidden="true"></span>
				  <span class="visually-hidden">Next</span>
				</button>
			  </div>
			  En general, se entiende por paisaje cualquier área de la superficie terrestre producto de la interacción de los diferentes factores presentes en ella y que tienen un reflejo visual en el espacio. ... El paisaje, desde el punto de vista artístico, sobre todo pictórico, es la representación gráfica de un terreno extenso.
		</aside>
	</section>

	<footer class="row bg-secondary">
	<form class="row g-3">
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationDefault01" value="Mark" required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02" value="Otto" required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label">Username</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationDefault03" required/>
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label">State</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationDefault05" required/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
	</footer>
	
	<footer class="row bg-secondary">
		<div class="container">
			<div class="card">
				<div class="card-header">
				  Featured
				</div>
				<div class="card-body">
				  <h5 class="card-title">Special title treatment</h5>
				  <p class="card-text">Científicos descubren una población de osos de anteojos en los bosques secos de Bolivia.</p>
				  <a href="#" class="btn btn-primary">Informate</a>
				</div>
			  </div>
		</div>
	</footer>

	<section class="row"> 
		<article class="col-md-6 bg-ling"> 
			<table class="table table-success table-striped">
				<thead>
				  <tr>
					<th scope="col">#</th>
					<th scope="col">First</th>
					<th scope="col">Last</th>
					<th scope="col">Handle</th>
				  </tr>
				</thead>
				<tbody>
				  <tr>
					<th scope="row">1</th>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
				  </tr>
				  <tr>
					<th scope="row">2</th>
					<td>Jacob</td>
					<td>Thornton</td>
					<td>@fat</td>
				  </tr>
				  <tr>
					<th scope="row">3</th>
					<td colspan="2">Larry the Bird</td>
					<td>@twitter</td>
				  </tr>
				  <tr>
					<th scope="row">4</th>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
				  </tr>
				  <tr>
					<th scope="row">5</th>
					<td>Jacob</td>
					<td>Thornton</td>
					<td>@fat</td>
				  </tr>
				  <tr>
					<th scope="row">6</th>
					<td colspan="2">Larry the Bird</td>
					<td>@twitter</td>
				  </tr>
				  <tr>
					<th scope="row">7</th>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
				  </tr>
				  <tr>
					<th scope="row">8</th>
					<td>Jacob</td>
					<td>Thornton</td>
					<td>@fat</td>
				  </tr>
				  <tr>
					<th scope="row">9</th>
					<td colspan="2">Larry the Bird</td>
					<td>@twitter</td>
				  </tr>
				</tbody>
			  </table>
		</article>
		
		<article class="col-md-2 bg-secondary">
			<div class="d-grid gap-2 col-6 mx-auto">
				<button type="button" class="btn btn-primary">Primary</button>
				<button type="button" class="btn btn-btn-outline--secondary">Secondary</button>
				<button type="button" class="btn btn-success">Success</button>
				<button type="button" class="btn btn-danger">Danger</button>
				<button type="button" class="btn btn-warning">Warning</button>
				<button type="button" class="btn btn-info">Info</button>
				<button type="button" class="btn btn-light">Light</button>
				<button type="button" class="btn btn-dark">Dark</button>
				<button type="button" class="btn btn-link">Link</button>
			  </div>
		</article>

		<aside class="col-md-4 bg-primary">
			<div class="card mb-3">
			  <div class="card">
				<div class="card-body">
				  <h5 class="card-title">Card title</h5>
				  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
				  <a href="#" class="btn btn-primary">Go somewhere</a>
				</div>
				<img src="https://i.ibb.co/THD7qr3/109101099-gettyimages-967315896.jpg" class="card-img-bottom" alt="..."/>
			  </div>
			  </div>

		</aside>
	</section>


  </div>

  );
}

export default App;
