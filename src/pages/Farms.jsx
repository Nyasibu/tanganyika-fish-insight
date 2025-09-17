import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Phone, Mail, Fish, Target } from "lucide-react";
import { farms } from "@/data/mockData";

export default function Farms() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  // Get unique species and locations for filters
  const allSpecies = [...new Set(farms.flatMap(farm => farm.species))];
  const allLocations = [...new Set(farms.map(farm => farm.location.name))];

  // Filter farms based on search criteria
  const filteredFarms = farms.filter((farm) => {
    const matchesSearch = farm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         farm.farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         farm.location.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSpecies = selectedSpecies === "all" || farm.species.includes(selectedSpecies);
    const matchesLocation = selectedLocation === "all" || farm.location.name === selectedLocation;

    return matchesSearch && matchesSpecies && matchesLocation;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Fish Farms</h2>
          <p className="text-muted-foreground">
            Manage and view all fish farms across your areas of interest
          </p>
        </div>
      </div>

      {/* Filters */}
      <Card className="border-0 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            Filter Farms
          </CardTitle>
          <CardDescription>
            Search by location, species, or farmer name
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Search</label>
              <Input
                placeholder="Search farms, farmers, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Species</label>
              <Select value={selectedSpecies} onValueChange={setSelectedSpecies}>
                <SelectTrigger>
                  <SelectValue placeholder="Select species" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Species</SelectItem>
                  {allSpecies.map((species) => (
                    <SelectItem key={species} value={species}>
                      {species}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Location</label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {allLocations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {filteredFarms.length} of {farms.length} farms
        </p>
      </div>

      {/* Farm List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredFarms.map((farm) => (
          <Card key={farm.id} className="border-0 shadow-card hover:shadow-elevated transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{farm.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" />
                    {farm.location.name}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-success-light text-success">
                  {farm.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Farmer Details */}
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-muted-foreground">Farmer Details</h4>
                <div className="space-y-1">
                  <p className="text-sm font-medium">{farm.farmer.name}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-3 h-3" />
                    {farm.farmer.phone}
                  </div>
                  {farm.farmer.email && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-3 h-3" />
                      {farm.farmer.email}
                    </div>
                  )}
                </div>
              </div>

              {/* Farm Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-accent/50 rounded-lg">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Target className="w-4 h-4 text-chart-1" />
                  </div>
                  <p className="text-lg font-bold text-chart-1">{farm.cages}</p>
                  <p className="text-xs text-muted-foreground">Cages</p>
                </div>
                <div className="text-center p-3 bg-accent/50 rounded-lg">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Fish className="w-4 h-4 text-chart-2" />
                  </div>
                  <p className="text-lg font-bold text-chart-2">
                    {(farm.totalProduction / 1000).toFixed(1)}k
                  </p>
                  <p className="text-xs text-muted-foreground">kg/year</p>
                </div>
              </div>

              {/* Species */}
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-muted-foreground">Fish Species</h4>
                <div className="flex flex-wrap gap-2">
                  {farm.species.map((species) => (
                    <Badge key={species} variant="outline" className="text-xs">
                      {species}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <Button className="w-full" variant="outline">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredFarms.length === 0 && (
        <Card className="border-0 shadow-card">
          <CardContent className="text-center py-12">
            <Fish className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No farms found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or filters
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedSpecies("all");
                setSelectedLocation("all");
              }}
            >
              Clear Filters
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}