# Chart Structure
```
Chart.yaml - chart version, dependencies listed here
templates/*.yaml - usually k8s yaml file
values.yaml - values
```

# Umbrella Chart
```
charts/* - any service ie. backend listed here
 charts/backend/templates
 charts/backend/Chart.yaml
Chart.yaml
```

#### Dependency
`$ helm dependency update`

#### Static check
`$ helm template [chart_name]`

#### dynamic check
`$ helm install [release_name] [chart_name] --dry-run --debug`

# Supply values.yaml
```
$ helm install -f [values.yaml file path or any other values file]
OR
$ helm install --set MY_SECRET_PARA=notInValue
```
