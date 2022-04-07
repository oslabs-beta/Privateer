<div  align="center">
 
<img src="https://user-images.githubusercontent.com/69579929/141202691-c2d43597-3acb-4b84-976f-18defa996f3a.png" height=400/>

  <h1>Privateer</h1>

  <p>Light-weight prototyping and monitoring tool for Kubernetes.</p>
  
  <a href=license.md><img src="https://img.shields.io/github/license/oslabs-beta/Privateer?style=plastic"/></a>
  <img src="https://img.shields.io/github/package-json/v/oslabs-beta/Privateer?style=plastic" />
  
  <img src="https://img.shields.io/github/last-commit/oslabs-beta/Privateer?style=plastic" />
  <a href="/issues"><img src="https://img.shields.io/github/issues/oslabs-beta/Privateer?style=plastic"></a>

</div>

## About:

Privateer is a lightweight Kubernetes prototyping and monitoring tool developed in Electron.js.

## Create Page:
 
Quickly create configuration files for a new Kubernetes cluster using a simple form!

<div align="center">

 ![create3](https://user-images.githubusercontent.com/69579929/141355761-e12df616-c1a0-4c34-86f6-d3f6a913726f.gif)
 
</div>

## Monitor Page:

Monitor your Kubernetes cluster directly from this application using our integrated Grafana dashboard!  Already have Grafana installed?  Great!  Privateer is fully- compatible with your existing setup.  If not, get Promethus and Grafana running quickly using our provided configuration files.

<div align="center">

![recording (1)](https://user-images.githubusercontent.com/84036184/141372205-9b3b8972-8eb0-4649-9cc8-b854bb66520a.gif)

 </div>
 
## Network Page:

Automatically visualize your entire Kubernetes cluster architecture by generating an interactive topological graph!  Click on Kubernetes objects to display extensive configuration details.

<div align="center">
 
![network](https://user-images.githubusercontent.com/69579929/141356994-c5279563-5c96-4c66-b771-cedc7fe10c25.gif)
 
</div>



 </div>

## Getting Started:

### Installation

- Clone this repository to the machine running your Kubernetes cluster.
- Use of the Monitoring dashboard requires localhost access to Grafana on port 3000.  If you don't have Prometheus and Grafana Installed, simply do the following:

  - Create a new `Monitoring` namespace using the command: `kubectl create namespace monitoring` 
  - Navigate to the Privateer root directory in your terminal and run the command `kubectl apply -f infra` to install Prometheus and Grafana in your cluster.
  - Run the command `kubectl get pods --namespace=monitoring` and note the names of your Prometheus and Grafana pods.
  - Run the command `kubectl port-forward [YOUR PROMETHEUS POD NAME] 9090:9090 -n monitoring` to make your Prometheus pod accessible on port 9090.
  - Run the command `kubectl port-forward [YOUR GRAFANA POD NAME] 3000:3000 -n monitoring` to make your Grafana pod accessible on port 3000.

- `npm install`
- `npm run build`
- `npm start`

<br></br>

## Built With:

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Electron](https://www.electronjs.org/docs)
- [Node](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Vis.js](https://visjs.org/)
- [Kubernetes-client](https://github.com/kubernetes-client/)
- [Material UI](https://mui.com/)

## Planned Features:

- Integrated load-testing of Kubernetes cluster.
- Ability to create and modify cluster configurations using a GUI.
- Distribution of application as a standalone executable file.

## Contributors:

- Isaiah Delgado - [Github](https://github.com/IsaiahDel516) | [Linkedin](https://www.linkedin.com/in/isaiahdel/)
- Danni Denmark -[Github](https://github.com/dannid33) | [Linkedin](https://www.linkedin.com/in/dannidenmark/)
- Conrad Friesen - [Github](https://github.com/dcfriesen) | [Linkedin](https://www.linkedin.com/in/conrad-friesen/)
- Dustin Jones - [Github](https://github.com/dtjones404) | [Linkedin](https://www.linkedin.com/in/dustin-jones-404/)
- Kyo Ku - [Github](https://github.com/kk7259951) | [Linkedin](https://www.linkedin.com/in/kyosan-ku/)

## License:

This product is licensed under the [GNU General Public License v3.0](License.md).‌

## Aknowledgements:

This product is accelerated by OS Labs.
