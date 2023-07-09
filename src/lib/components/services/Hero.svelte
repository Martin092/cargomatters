<script>
    import {MainSolutions} from "$lib/components/reusable";
    import {MainSolution} from "$lib/typescript";

    let transportSolution = new MainSolution("/images/gray.png", "/images/gray.png", "Transport", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
        ["Road Freight", "Sea Freight", "Air Freight", "Rail Freight", "Emergency Transport"],
        "/services/transport")

    let industrySolution = new MainSolution("/images/gray.png", "/images/gray.png", "Logistics & Industry", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
        ["Business Solutions", "Customs handling", "Integrated services", "Distributions", "Cargo Insurance", "Claim Handling", "Added Value Services"],
        "/services/industry")
</script>


<div id="hero" data-testid="xl-hero" class="col-start-1 col-span-full row-start-1 w-screen py-52
                                      ml-[-16px]
                                      md:ml-[-32px]
                                      xl:ml-[-128px] xl:py-80"></div>

<div id="heroOrnaments" data-testid="xl-hero" class="col-start-2 col-span-full row-start-2 mt-[-30px] hidden z-[-1]
                                      ml-[-16px]
                                      md:ml-[-32px]
                                      xl:block xl:ml-[-128px]"></div>
<div class="row-start-2 col-start-1 col-span-full flex flex-col gap-2 py-40 pb-20 mt-[-420px]
            md:flex-row
            lg:col-start-2 lg:col-span-6
            xl:col-start-2 xl:col-span-10
            2xl:col-start-3 2xl:col-span-8">
    <MainSolutions mainSolution={transportSolution} />
    <MainSolutions mainSolution={industrySolution} />
</div>

<style lang="scss">
    #hero {
        background-image: url("/images/services-hero.svg");
        background-size: cover;
        background-position: center;
    }

    #heroOrnaments {
      background-image: url("/images/hero-ornaments.svg");
      background-size: cover;
      background-position: left;
    }
</style>
