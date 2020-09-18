import * as pulumi from "@pulumi/pulumi";
import * as digitalocean from "@pulumi/digitalocean";
import * as kubernetes from "@pulumi/kubernetes";

const cluster = new digitalocean.KubernetesCluster("do-cluster", {
    region: digitalocean.Regions.SFO2,
    version: "latest",
    nodePool: {
        name: "default",
        size: digitalocean.DropletSlugs.DropletS2VCPU2GB,
        nodeCount: 3,
    },
});

export const kubeconfig = cluster.kubeConfigs[0].rawConfig;