<script>
    import {MainSolutions} from "$lib/components/reusable";
    import {MainSolution} from "$lib/typescript";

    let mainSolution = new MainSolution("/images/gray.png", "/images/gray.png", "Industrial", "description",
                                        ["Road Freight", "Sea Freight", "Air Freight", "Rail Freight", "Emergency Transport Services"],
                                        "link")
</script>


<div id="hero" data-testid="xl-hero" class="col-start-1 col-span-full row-start-1 w-screen py-52
                                      ml-[-16px]
                                      md:ml-[-32px]
                                      xl:ml-[-128px] xl:py-80"></div>

<div id="heroOrnaments" data-testid="xl-hero" class="col-start-2 col-span-full row-start-2 mt-[-30px] hidden
                                      ml-[-16px]
                                      md:ml-[-32px]
                                      xl:block xl:ml-[-128px]"></div>
<div class="row-start-2 col-start-1 col-span-full flex flex-col gap-2 py-40 pb-80 mt-[-420px]
            md:flex-row
            lg:col-start-2 lg:col-span-6
            xl:col-start-3 xl:col-span-8
            2xl:col-start-4 2xl:col-span-6">
    <MainSolutions {mainSolution} />
    <MainSolutions {mainSolution} />
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
