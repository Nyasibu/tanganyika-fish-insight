import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Fish, Building2 } from "lucide-react";
import { farms } from "@/data/mockData";

export default function BrowseFarms() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Farm Locations</h2>
          <p className="text-muted-foreground">
            Interactive map showing fish farms across the region
          </p>
        </div>
      </div>

      {/* Map Card */}
      <Card className="border-0 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-chart-1" />
            Fish Farms Map
          </CardTitle>
          <CardDescription>
            Click on markers to view farm details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-[500px] bg-gradient-to-br from-chart-2/10 to-chart-1/10 rounded-lg border border-border overflow-hidden">
            {/* Placeholder for map - in a real implementation, you would use Mapbox or Google Maps */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-chart-1 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Interactive Map</h3>
                <p className="text-muted-foreground mb-4">
                  Map would show farm locations with markers
                </p>
                <div className="text-sm text-muted-foreground">
                  Coordinates: sample bounding box
                </div>
              </div>
            </div>
            
            {/* Farm markers overlay */}
            <div className="absolute inset-0">
              {farms.map((farm, index) => (
                <div
                  key={farm.id}
                  className="absolute w-3 h-3 bg-chart-1 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-150 transition-transform"
                  style={{
                    left: `${20 + (index * 12)}%`,
                    top: `${30 + (index % 3) * 15}%`,
                  }}
                  title={farm.name}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Farm Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {farms.map((farm) => (
          <Card
            key={farm.id}
            className="border-0 shadow-card hover:shadow-elevated transition-shadow cursor-pointer"
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-lg">{farm.name}</span>
                <div className="flex items-center gap-1 text-chart-1">
                  <MapPin className="w-4 h-4" />
                </div>
              </CardTitle>
              <CardDescription>{farm.location.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Farmer</span>
                  <span className="text-sm font-medium">{farm.farmer.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Production</span>
                  <span className="text-sm font-medium text-chart-2">
                    {(farm.totalProduction / 1000).toFixed(1)}k kg/year
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Cages</span>
                  <span className="text-sm font-medium">{farm.cages}</span>
                </div>
                <div className="pt-2">
                  <p className="text-xs text-muted-foreground mb-1">Species:</p>
                  <div className="flex flex-wrap gap-1">
                    {farm.species.map((species) => (
                      <span
                        key={species}
                        className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded-full"
                      >
                        {species}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
